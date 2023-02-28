import {useRouter} from 'next/router'

export default function Blog() {
    const router = useRouter();
    const {id} = router.query;

return (
        <div className="container">
            <h1> You are now reading article {id} </h1>
        </div>
    )
    
 }