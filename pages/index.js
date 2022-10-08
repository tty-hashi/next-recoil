import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {useRecoilState} from 'recoil'
import { countState, userState } from '../components/atoms'
import { useState } from 'react'

export default function Home() {
  const [count , setCount] = useRecoilState(countState);
  const [user, setUser] = useRecoilState(userState);

  const increment = () => {
    return count + 1;
  }

  const onClickHandler = () => {
    setCount(increment);
  }


  const updateUser = () => {
    return { ...user, ...{age: user.age + 1}};
  }
  return (
    <>
    <h1>Home</h1>
    <div>
      <p suppressHydrationWarning={true}>count:{count}</p>
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
