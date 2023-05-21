import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Toys Planet`;
    },[title])
}

export default useTitle;