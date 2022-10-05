import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {useRecoilState} from 'recoil'
import { countState, userState } from '../components/atoms'
import { useState } from 'react'

export default function Home() {
  const [count , setCount] = useRecoilState(countState);
  const [user, setUser] = useRecoilState(userState);
  const [cout1, setCount1] = useState(0)
  let c;

  const increment = () => {
    return cout1 + 1;
  }

  const onClickHandler = () => {
    setCount1(increment);
    setCount(cout1);
  }


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
