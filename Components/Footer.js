import React from 'react'
// Footer is declared as a constant using const. This means you cannot reassign Footer to a different value.
const Footer = () => {
  return (
    <footer className="  py-3 text-center" style={{position: 'fixed', bottom: 0, width: '100%', boxShadow: '0 -2px 5px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div>
        &copy; Raabia | 
        Follow me on 
        <a href="https://github.com/SRAABIA" target="_blank" rel="noopener noreferrer" className="text-warning mx-2">GitHub</a> 
        | Meow 🐾  for you.
      </div>
    </footer>
  );
}

export default Footer
