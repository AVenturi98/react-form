import { useState } from 'react'
import initPosts from '../../posts'
import Card from '../card/Card'
import Tags from '../tags/Tags'
import Todos from '../Todos/Todos'
// import TodosTwo from '../Todos/TodosTwo'

export default function mainSection() {

    const [posts, setPostsFilm] = useState(initPosts)
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')

    function addFilm(event) {
        event.preventDefault()

        const newDate = date.trim()

        const newPost = {
            id: Date.now(),
            title: title,
            image: undefined,
            content: newDate,
            tags: ['css'],
            published: true,
        }

        setPostsFilm([...posts, newPost])
        setTitle('')
        setDate('')

        console.log('aggiunto')
    }

    function deletePost(post) {

        setPostsFilm(posts.filter(el => el !== post))
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    {/* <div className='col-100'>

                        <Todos />

                    </div> */}

                    <div className='col-100'>

                        <form onSubmit={addFilm} action="">
                            <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Titolo' value={title} />
                            <input type="text" onChange={(e) => setDate(e.target.value)} placeholder='Data di uscita' value={date} />
                            <input type="submit" value="Aggiungi" />

                        </form>



                    </div>
                    {posts.map((post) =>
                        <div key={post.id} className="col-6">
                            <Card callBack={() => deletePost(post)} title={post.title} content={post.content} tags={post.tags} published={post.published} image={post.image} />
                        </div>)}
                </div>
                <div className="container">
                    <ul className="row">
                        <Tags />
                    </ul>
                </div>
            </div>
        </>

    )
}