import { useState } from "react";

export default function Word({ word: w }) {
    const [word,setWord] = useState(w);
    const [isShow,setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
    function toggleShow(){
        setIsShow(!isShow);
    }
    function toggleDown(){
        // setIsDown(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                ...word,
                isDone:!isDone
            }),
        })
        .then(res=>{
            if(res.ok){
                setIsDone(!isDone);
            }
        });
    }

    function del(){
        if(window.confirm('削除しますか？')){
            fetch(`http://localhost:3001/words/${word.id}`,{
            method: 'DELETE',//삭제는 정보를 넘겨줄 필요가없기에 이것만 쓰면 됨 
            })
            .then(res=>{
                if(res.ok){
                    setWord({id:0});
                }
            })
        }
    }
    //表格会消失
    if(word.id===0){
        return null;
    }
    return (
        <>
            <tr className ={isDone ? "off" : ""}>
                <td>
                    <input type="checkbox" checked={isDone} onChange={toggleDown}/>
                </td>
                <td>
                    {word.eng}
                </td>
                <td>
                    {isShow && word.kor}
                </td>
                <td>
                    <button onClick={toggleShow}>詳細 {isShow? '隠す':'表示'}</button>
                    <button onClick={del} className="btn_del">削除</button>
                </td>
            </tr>
        </>
    );
}