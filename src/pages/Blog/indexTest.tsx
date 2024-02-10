import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function BlogTmp() {
    const [tmp, setTmp] = useState("");

    useEffect(() => {
        getMarkdown();
    }, []);

    const getMarkdown = async () => {
        try {
            const result: any = await axios.get(
                'https://7wls2ibj.api.sanity.io/v1/data/query/production?query=*[_type == "post"]',
            );
            setTmp(result.data.result[0].content);
        } catch (err) {
            throw err;
        }
    };

    return (
        <div>
            <ReactMarkdown>{tmp}</ReactMarkdown>
        </div>
    );
}

export default BlogTmp;
