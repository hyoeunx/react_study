import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "심효은",
        comment: "안녕하세요, 효은입니다",
    },
    {
        name: "ㅇㅇㅇ",
        comment: "우와아아앙~",
    },
    {
        name: "김정우",
        comment: "저는 NCT입니다",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;

