export default function Bar({ height }) {
    return (
        <div style={{height: `${height}px`}} className={`w-[5px] rounded-t bg-accent`}></div>
    );
}