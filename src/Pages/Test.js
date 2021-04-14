import React from 'react'
import useSWR from "swr"
import {useRouter} from "next/router"
import axios from "axios"

const fetcher =lang =>  axios.get(`/Speech/data?lang=${lang}`).then(r => r.data)

export default function Lang(){
    const { data, error } = useSWR(`/api/user/123`, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return <div>hello {data.langA}!</div>
}