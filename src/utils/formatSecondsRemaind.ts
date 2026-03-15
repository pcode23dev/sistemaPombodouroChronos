export default function formatSecondsRemaind(seconds: number): string {
    seconds*=60;
    
    const h = seconds/60;
    const s = seconds - (h*60);
    console.log("h: ",h);
    console.log("s: ",s);
    
    return h +":"+s;
}