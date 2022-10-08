import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {useRecoilState} from 'recoil'
import { countState, userState } from '../components/atoms'
import { useEffect, useState } from 'react'

export default function Home() {
  const [globalCount , setGlobalCount] = useRecoilState(countState);
  const [user, setUser] = useRecoilState(userState);
  const [count, setCount] = useState(0)

  const increment = () => {
    return count + 1;
  }

  const onClickHandler = () => {
    setCount(increment)
    setGlobalCount(increment);
  }

  useEffect(() => {
    setCount(globalCount)
  }, [])

  const updateUser = () => {
    return { ...user, ...{age: user.age + 1}};
  }
  return (
    <>
    <h1>Home</h1>
    <div>
      <p>count:{count}</p>
      <button onClick={onClickHandler}>count increment</button>
      <hr />
      <p>user.name:{user.name}</p>
      <p>user.age:{user.age}</p>
      <button onClick={() => setUser(updateUser)}>age increment</button>
    </div>
    <hr />
    <div>
      <Link href="/about"><a>About</a></Link>
    </div>
  </>
  )
}
