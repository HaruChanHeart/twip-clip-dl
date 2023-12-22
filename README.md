![Icon](./assets/icons/256x256.png)

# TWIP 클립 다운로더
TWIP (트윕) 클립에서 특정 사용자의 클립들을 한번에 다운로드 해 주는 도구입니다. **2023년 12월 26일 오전 10시 이후 서비스가 종료**되기 때문에, 서비스 종료 전에 영상들을 백업할 수 있게 만들었습니다

## 사용법
프로그램 및 앱을 실행하면 메인 화면을 볼 수 있는데, 여기서 `Twitch ID` 입력칸에 스트리머 분의 트위치 ID를 입력해 주시면 됩니다. (예: `haruchanheart`)

그러면 자동으로 트윕 클립 서버에서 클립 목록들을 가져오고, 필요한 것들을 선택하거나 전부 선택해서 맨 아래에 있는 다운로드 버튼을 클릭해 주시면 됩니다

다운로드가 모두 완료되면 여러분의 사용자 폴더에서 `Downloads` 또는 `다운로드` 폴더에 저장되니 확인해 보시기 바랍니다

## 사용된 라이브러리
* [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate)
* [Tailwind CSS](https://tailwindcss.com)
* [NextUI](https://nextui.org)
* [node-downloader-helper](https://github.com/hgouveia/node-downloader-helper)
