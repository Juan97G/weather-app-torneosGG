export const calculateCurrentTime = (dt: number, timezone: number) => {
    const current = new Date((dt + timezone)*1000);

    const hours = current.getUTCHours() < 10 ? `0${current.getUTCHours()}` : current.getUTCHours();
    const minutes = current.getUTCMinutes() < 10 ? `0${current.getUTCMinutes()}` : current.getUTCMinutes();
    const seconds = current.getUTCSeconds() < 10 ? `0${current.getUTCSeconds()}` : current.getUTCSeconds();

    return `${hours}:${minutes}:${seconds}`;

}