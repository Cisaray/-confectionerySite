/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens:{
      lg:{max:'1199.99px'},
      md:{max:'991.99px'},
      sm:{max:'767.99px'},
      xs:{max:'479.99px'},
    },
    extend: {
      fontFamily:{
        ysabeau:['Ysabeau', 'sans-serif']
      },
      backgroundImage:{
        "firstBack": "url(../public/assets/bg1.JPG)",
        "secondBack": "url(../public/assets/bg2.JPG)",
        "thirdBack": "url(../public/assets/bg3.JPG)"
      },
      colors: {
        graytext: '##3f3a47'
      }
    },
  },
  plugins: [],
}

