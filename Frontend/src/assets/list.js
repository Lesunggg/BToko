import img1 from './img/img1.jpeg'
import img2 from './img/img2.jpeg'
import img3 from './img/img3.jpeg'
import img4 from './img/img4.jpeg'
import img5 from './img/img5.jpeg'
import img6 from './img/img6.jpeg'
import img7 from './img/img7.jpeg'
import img8 from './img/img8.jpeg'
import img9 from './img/img9.jpeg'
import img10 from './img/img10.jpeg'
import img11 from './img/img11.jpeg'
import img12 from './img/img12.jpeg'
import img13 from './img/img13.jpeg'
import img14 from './img/img14.jpeg'
import img15 from './img/img15.jpeg'
import img16 from './img/img16.jpeg'
import img17 from './img/img17.jpeg'
import img18 from './img/img18.jpeg'
import img19 from './img/img19.jpeg'
import img20 from './img/img20.jpeg'
import img21 from './img/img21.jpeg'
import img22 from './img/img22.jpeg'
import img23 from './img/img23.jpeg'
import img24 from './img/img24.jpeg'

import show1 from './img/slide/img1.jpg'
import show2 from './img/slide/img2.jpg'

import axios from 'axios'
import { ref } from 'vue'

export const list = [img1,img2,img3,img4,img5,img6,
    img7,img8,img9,img10,img11,img12,
    img13,img14,img15,img16,img17,img18,
    img19,img20,img21,img22,img23,img24,
    ]
export const listFilter = [img2, img8, img14, img20]
export const akun = ref(false)
export const cekAkun = function () {
    axios.get('http://localhost:3000/cek',{withCredentials:true})
      .then((res)=>{
        if (res.data=='Success'){
          akun.value=true
        }else{
          akun.value=false
        }
      })
      .catch((err)=>{
        akun.value = false
      })
    }

export const cart = function () {
  axios.get('http://localhost:3000/cart',{withCredentials: true})
    .then((res)=>{
        user.value = res.data[0]
        listcart.value = res.data[1]
        total.value = res.data[2]
    })
    .catch((err)=>{
      alert('Check Cart Problem')
    })
}
export const user = ref('')
export const listcart = ref()
export const total = ref()
export const listshow = [show1,show2]


