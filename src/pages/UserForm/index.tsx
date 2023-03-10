import React from 'react'
import useUserStore from '../../stores/user'

export const UserForm = () => {
  const addUser = useUserStore(state => state.addUser)

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const name = (event.target as any).name.value;
    const email = (event.target as any).email.value;

    addUser({
      name,
      email
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="name" placeholder="Nome" />
        <br />
        <input name="email" placeholder="Email" />
        <br />
        <button type='submit'>Create User</button>
      </form>
    </div>
  )
}
