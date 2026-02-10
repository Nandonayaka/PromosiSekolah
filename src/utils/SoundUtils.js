export const playSfx = (type) => {
    const sounds = {
        attack: '/assets/audio/bosshit.mp3',
        enter: '/assets/audio/boss.mp3',
        win: '/assets/audio/bossdeath.mp3',
        lock: '/assets/audio/notif.mp3',
        unlock: '/assets/audio/unlock.mp3',
        click: '/assets/audio/notif.mp3',
        confirm: '/assets/audio/unlock.mp3'
    };

    if (!sounds[type]) return;

    const audio = new Audio(sounds[type]);
    audio.volume = 0.5;
    audio.play().catch(e => console.log("Audio play failed:", e));
};
