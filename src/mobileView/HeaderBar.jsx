import React from 'react'
import "./HeaderBar.scss"

function HeaderBar() {
  return (
    <div className='headerbar'>
        <img src="../../public/impressio.svg" alt="impressioicon" id='impressioicon'/>
        <p className='username'>Hello, Joe!</p>
        <img src="https://s3-alpha-sig.figma.com/img/edc8/82c0/d070d31006108ebb5d1535d000813efb?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KZVqLND3rOr5B0gwY1XLuXSs3EiKlFUn1LAFRTDI74JzeDBS0ei5abN0s5K6phgAc9g-SpUrpcjX2IRZ4eO7-PVycf1eCUPDePoxIAGoRYKhyX89H9gWxqFqGDoi-HPskSgSpXVHU-2R9ekrkOD0yYWODXMDI2oblCJiSjBwyOOFn8S2UV7ikv7OPsSZ59WJGd33UugDkalzTkM6t6d45U--JVebZQivF8TiZ4omyrhuTO0ikTGx9edEJ0maVTqXLixTfeAawCLxBhrN7hv9ZIkwbtPIs71ILrNGrPTs1rlH7iVTYsSue8ZIAEV48Ntb53bL~yrXdd6oFqsjzVTcFg__" alt="profileIcon" id='profileicon'/>

    </div>
  )
}

export default HeaderBar