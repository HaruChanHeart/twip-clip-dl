import {
    Button,
    Image,
    Input,
    Selection,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from '@nextui-org/react'
import { useEffect, useState } from 'react'

interface IList {
    cfVideoId: string
    cfVideoThumbnail: string
    commentCount: number
    createUserId: number
    createdAt: string
    created_at: string
    deleteDescription: null | string
    deletedAt: null | string
    description: null | string
    downloadLink: string
    downloadMessage: string
    downloadStatus: string
    ends: number
    id: number
    indexLevel: null | number
    isAdult: boolean
    isDelayOpen: boolean
    isDeleted: boolean
    isPrivate: boolean
    key: string
    likeCount: number
    originalClipId: string
    starts: number
    targetUserId: number
    title: string
    updatedAt: string
    updated_at: string
    viewCount: number
    videoDuration: number
}

export function ClipDownloader() {
    const [twitchId, setTwitchId] = useState<string>('')
    const [downloadList, setDownloadList] = useState<Array<IList>>([])
    const [selectedList, setSelectedList] = useState<Selection>(new Set())
    const [isDownloading, setIsDownloading] = useState(false)

    useEffect(() => {
      // listen to the 'message' channel
      window.electron.ipcRenderer.on('downloading', (arg: any) => {
        setIsDownloading(arg)
      });
    }, [])

    const fetchData = (twitchId: any) => {
        fetch(`https://api.twip.kr/user/${twitchId}`, {
            cache: 'reload'
        })
            .then((res) => res.json())
            .then((data) => {
                fetchList(data?.data?.streamer?.id)
            })
    }

    const fetchList = (userId: number) => {
        fetch(`https://vod-api.twip.kr/clip/user/${userId}`, {
            cache: 'reload'
        })
            .then((res) => res.json())
            .then((data) => {
                setDownloadList(data?.data)}
            )
    }

    const doFetchDownload = (file_url: string, time: string, title: string) => {
        try {
            window.electron.ipcRenderer.sendMessage('download', [file_url, {
                fileName: `[${twitchId}] ${convertTime(time, '-')} ${title}.mp4`
            }]);
        }
        catch (error) {
            console.error(error);
        }
    }

    const multipleDownload = () => {
        if (selectedList === 'all') {
            for (const i of downloadList) {
                const link : string = i.downloadLink
                const time : string = i.createdAt
                const title : string = i.title
                
                doFetchDownload(link, time, title)
            }
        }
        else {
            selectedList.forEach((i) => {
                const index : number = parseInt(i.toString())
                const link : string = downloadList[index].downloadLink
                const time : string = downloadList[index].createdAt
                const title : string = downloadList[index].title
                
                doFetchDownload(link, time, title)
            })
        }
    }

    const convertTime = (date: string, colon: string) => {
        const time = new Date(date)
        const td = (value: number) => {
            return value.toString().padStart(2, "0")
        }

        return `${time.getFullYear()}-${td(time.getMonth() + 1)}-${td(time.getDate())} ${td(time.getHours())}${colon}${td(time.getMinutes())}${colon}${td(time.getSeconds())}`
    }

    const emptyTable = () => {
        return (
            <TableRow key={1}>
                <TableCell><div></div></TableCell>
                <TableCell><div></div></TableCell>
            </TableRow>
        )
    }

    return (
        <section>
            <div className='flex w-full flex-wrap md:flex-nowrap items-center gap-4 my-5'>
                <Input
                    isRequired
                    type='text'
                    label='Twitch ID'
                    className='max-w-xs'
                    onChange={(e) => {
                        setTwitchId(e.target.value)
                    }}
                />
                <Button color='primary' onClick={(e) => fetchData(twitchId)}>Search</Button>
            </div>
            <Table
                selectedKeys={selectedList}
                onSelectionChange={setSelectedList}
                selectionMode='multiple'
                aria-label='Clip Download List'
                color='default'
                className='my-5'
            >
                <TableHeader>
                    <TableColumn>TITLE</TableColumn>
                    <TableColumn>DATE</TableColumn>
                </TableHeader>
                <TableBody emptyContent='No clip datas found'>
                    {downloadList ? downloadList.map((value: IList, index: number) => (
                        <TableRow
                            key={index}
                        >
                            <TableCell>
                                <div className='flex flex-row items-center justify-star gap-5'>
                                    <Image
                                        src={value.cfVideoThumbnail}
                                        width={120}
                                        alt='Thumbnail'
                                    />
                                    <div className='flex flex-col items-start justify-center gap-1'>
                                        <span className='text-xl font-bold'>{value.title}</span>
                                        <span className='text-zinc-500'>View Count: {value.viewCount}</span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>{convertTime(value.createdAt, ':')}</TableCell>
                        </TableRow>
                    )) : emptyTable}
                </TableBody>
            </Table>
            <Button
                color='primary'
                isLoading={isDownloading}
                onClick={(e) => multipleDownload()}
            >{isDownloading ? 'Downloading' : 'Download'}</Button>
        </section>
    )
}