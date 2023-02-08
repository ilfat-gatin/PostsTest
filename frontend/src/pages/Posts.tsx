import { postApi } from "../services/PostService"
import { PostItem } from "../components/PostItem"
import styles from "../styles/Posts.module.css"
import { useActions } from "../hooks/actions"
import { useEffect, useState } from "react"
import { useAppSelector } from "../hooks/redux"
import { IPost } from "../models/IPost"
import { useMemo } from 'react'
import { Loader } from "../components/UI/Loader"
import { MyInput } from "../components/UI/MyInput"
import { MyTextarea } from "../components/UI/MyTextarea"
import { MyButton } from "../components/UI/MyButton"
import { MyDateInput } from "../components/UI/MyDateInput"

export const Posts = () => {
  const {data: response, isLoading, isError} = postApi.useGetAllPostsQuery('')
  const [createPost] = postApi.useCreatePostMutation()
  const {setAllPosts} = useActions()
  const {all} = useAppSelector(state => state.posts)
  const [date1, setDate1] = useState('')
  const [date2, setDate2] = useState('')
  const [search, setSearch] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [areInputsFilled, setAreInputsFilled] = useState(true)

  useEffect(() => {
    if (response) {
      setAllPosts(response)
    }    
  }, [response])

  const filteredPosts = useMemo(() => {
    console.log("getFilteredPosts")
    if (date1 || date2) {
      const start = Date.parse(date1) || Date.now()
      const end = Date.parse(date2) || Date.now()
      return [...all].filter(el => {
        const date = el.date.split("T")[0]
        return !((start && start > Date.parse(date)) || (end && end < Date.parse(date)))
      })
    } else return all
  }, [all, date1, date2])

  const filteredAndSearchedPosts = useMemo(() => {
    return filteredPosts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
  }, [search, filteredPosts])

  const handleCreate = async () => {
    if (!postTitle || !postBody) {
      setAreInputsFilled(false)
      return
    } else {
      setAreInputsFilled(true)
      await createPost({title: postTitle, text: postBody})
      setPostTitle('')
      setPostBody('')
    }    
  }
    
  return (
    <>
      <h1 className={styles.title}>Статьи</h1> 
      <hr /> 
      <> {isLoading ? <Loader /> : 
        <>
          <div className={styles.filtersWrapper}>
            <div className={styles.datesWrapper}>
              <span>Фильтр с</span>
              <MyDateInput value={date1} change={(value) => setDate1(value)}/>
              <span>по</span>
              <MyDateInput value={date2} change={(value) => setDate2(value)}/> 
            </div>
            <div className={styles.searchWrapper}>
              <MyInput value={search} change={(value) => setSearch(value)} placeholder='Поиск по статьям'/>
            </div>
          </div>         
          <div className={styles.cardContainer}>
              {filteredAndSearchedPosts.map( (el:IPost) => <PostItem id={el.id} title={el.title} date={el.date} key={el.id}/>)}
          </div>
          <div className={styles.form}>
            <h3>Новая статья</h3>
            {!areInputsFilled &&<p style={{color: "red"}}>Заполните все поля</p>}
            <MyInput placeholder="Название поста" value={postTitle} change={(value) => setPostTitle(value)}/>
            <MyTextarea placeholder="Текст поста" value={postBody} change={(value) => setPostBody(value)}/>
            <MyButton text="Добавить статью" click={handleCreate}/>
          </div> 
        </> 
        }
      </>
    </> 
  )
}