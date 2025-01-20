import { system } from "@minecraft/server";
import { PostStatus } from "./net";

system.beforeEvents.watchdogTerminate.subscribe((arg) => {
    console.error('서버가 예기치 못한 이유로 WebManage가 종료 되었습니다.');
    arg.cancel = true;
})

system.runInterval(() => {
    
    PostStatus().catch((res) => {
        console.info(res);
    })

}, 20)