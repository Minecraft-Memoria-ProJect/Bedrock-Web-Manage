import { system, world } from "@minecraft/server";

export const Status = {
    cp : world.getPlayers().length, // 현재 플레이어어
    mp : null, // 최대 플레이어 
    mu : system.serverSystemInfo.memoryTier // 숫자 0 ~ 5
};


