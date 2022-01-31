import { useState } from 'react';

const App = () => {

  const [value, setValue] = useState({
     normal: 'by default', 
     text: '', 
     select: '', 
     check: false ,
     state: 'blue'
    })

  const handleChange = ({ target }) => {
    setValue({ 
      ...value,
      [target.name]: target.type === 'checkbox' 
        ? target.checked 
        : target.value
    });
  }

  console.log(value)

  return(
    <div>
      { value.length < 5 ? <span>Longitud minima de 5</span> : null}
      <input type='text' name="normal" value={value.normal} onChange={handleChange} />
      <textarea name='text' onChange={handleChange} value={value.text} />

      <select value={value.select} name='select' onChange={handleChange}>
        <option value=''>-- Select --</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>

      <input
        type='checkbox'
        name='check'
        onChange={handleChange}
        checked={value.check}
      />


      <div>
        <label>Color</label>
        <input
          onChange={handleChange}
          type='radio'
          value='blue'
          name='state'
          checked={value.state == 'blue'}
          /> Blue
        <input
          onChange={handleChange} 
          type='radio'
          value='yellow'
          name='state'
          checked={value.state == 'yellow'}
          /> Yellow
        <input
        onChange={handleChange}
        type='radio'
        value='green'
        name='state'
        checked={value.state == 'green'}
        /> Green
      </div>
    </div>
  )

}

export default App;