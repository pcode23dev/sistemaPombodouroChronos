export default function formatSecondsRemaind(seconds: number): string {
    const min = String(Math.floor(seconds/60)).padStart(2,'0');
    const s = String(Math.floor(seconds%60)).padStart(2,'0');
    return `${min}:${s}`;
}