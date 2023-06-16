import './App.css'

function App() {
  

  return (
   <article className='tw-followCard'>
    <header className='tw-followCard-header'>
      <img className='tw-followCard-avatar' src="https://i.pinimg.com/236x/8b/39/09/8b390930f9f8b93dd49d36e32876bd96--avatar-app.jpg" alt="profile" />
      <div className='tw-followCard-info'>
        <strong>Jose Francisco</strong>
        <span className='tw-followCard-infoUserName'>@pepefran</span>
      </div>
    </header>

    <aside>
      <button className='tw-followCard-button'>
        Seguir
      </button>
    </aside>
   </article>
  )

}

export default App
