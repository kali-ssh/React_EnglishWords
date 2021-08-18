import { Link } from "react-router-dom";

export default function EmptyPage() {
    return (
        <>
            <h2>該当ページはありません～</h2>
            <Link to="/">戻る</Link>
        </>
    );
}