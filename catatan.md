# ReactJs

## install reactJs

```
npx create-react-app my-app
cd my-app
npm start

```

### how to use react js
the first time use react js you must know about javascript basic

### using state 
to use a state from react you must install axios 
```
yarn add axios
npm install axios

```
and then import to your project 

```
import axios from 'axios'
```


### basic react state 
untuk mengunakan state ada beberapa macam di antaranya jika mengunakan class bisa mengunkan method constructor 
contohnya 

```
<!-- buat method constructor yang di dalamnya berisikan state kosong yang akan kita isi dari data yang ada di html-->
constructor () {
    super()

    this.state = {
        firstname : '',
        lastname : '',
        fullname : '',
    }
}

<!-- kemudian buat method handler yang menerima data dari jsx html -->
changeHandler = (e) => {
    this.setState({
        <!-- e.target.name atau yang lebih tepatnya mengambil dari name="fistname" dari html kemudian di isi e.target.value yang di dapat dari value={this.state.fistname} dengan mengunakan setState-->
        [e.target.name]: e.target.value
    })
}

<!-- data dari jsx html -->
<form onSubmit={this.submitHandler}>
<input type="text" value={this.state.firstname} onChange={this.changeHandler} name="firstname" className="form-control"/>

<!-- method submit handler -->
<!-- method handler disini berfungsi untuk merubah atau mengabungkan data fistname dan lastname kedalam fullname dengan cata memasukkan data tersebut mengunakan setState method -->
submitHandler = (e) => {
    e.preventDefault()
    this.setState({
        fullname: `${this.state.fistname} ${this.state.lastname}`;
    })
}


```
### stateless
kali ini pengunaan state tidak mengunakan class tetapi lebih mengunakan function saja caranya sangatlah sederhana karna sangatlah mudah di terapkan hampir sama seperti dengan mengunakan class
```
<!-- buat ini di dalam function -->
<!-- buat dispacer fistname yang di isi dengan setFirstname -->
const [firtsname, setFirstname] = useState()
const [lastname, setLastname] = useState()
const [fullname, setFullname] = useState()

<!-- jsx html -->
<form onSubmit={submitHandler}>
<input type="text" value={fistname} onChange={(e) => {setFirstname(e.target.value)}} name="fistname" className="form-control" />
<input type="text" value={lastname} onChange={(e) => {setLastname(e.target.value)}} name="lastname" className="form-control" />

<!-- submitHandler -->

const submitHandler = (e) => {
    <!-- preventDefault wajib diterapkan karna jika tidak ada maka otomatis akan terefresh kembali setalah handler di jalankan jika mengunakan preventDefault maka tidak terjadi refresh setelah event di jalankan -->
    e.preventDefault()
    <!-- isi dispacer setfullname dengan fistname dan lastname -->
    setFullname(`${fistname} ${lastname}`)
}
```

### component & props
membuat component pada react js sangtlah mudah kita hanyalah tinggal membuat sebuah tamplate contohnya :

buat file pada Component/Card.js
Card.js
```
pada function di dalam argumentnya kita beri dengan nama props yang berguna untuk memberikan data ke App.js 
function Card(props) {
    console.log(props);
    return(
        <div className="card">
            <img src={props.content.imgUrl} alt="cat picures" className="card-img-top" />
            <div className="card-body">
                <h4>{props.content.title}</h4>
                <small className="text-muted">{props.content.publisPost}</small>
            </div>
        </div>
    )
}
```

pada file App.js
```
panggil card component yang telah di buat tadi kedalam App.js jika di situ kita ingin mengunakannya
kemudian buat props nya yang kita beri nama dengan content yang di dalamnya memiliki attribut imgUrl, title, publishPost gunanya untuk membuat card kita menjadi lebih dinamis
<Card content={{ 
    imgUrl : 'http://placekitten.com/300/200',
    title : 'the second my post',
    publisPost : 'Published 09 feb, 2020',
}}/>
```


### feching data with useffect
feching data pada react js sangatlah mudah dan banyak sekali caranya salah satunya bisa mengunkan useEffect
```
buat dispacer pada Function User
const [users, setUsers] = useState([])

const getUsers = async () => {
    try{
        let response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        setUSers(response.data);
    }catch(e) {
        console.log(e.message)
    }
}

useEffect(() => {
    getUsers()
}, [])
```

<!-- untuk looping datanya bisa mengunakan map -->

```
{
    users.map((user, index) => {
        return (
            <tr key={index}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
            </tr>
        )
    })
}
```

### react route
untuk mengunakan router pada react bisa mengunakan reactrouter.com
```
npm install react-router-dom
dalam pengunaan react router sangatlah mudah tinggal install package nya terlebih dahulu 

```

setelah package berhasil di install buat folder di dalam src dengan nama router kemudian buat file juga dengan nama index.js dan file tersebut tujuannya berguna untuk meletakkan script pada router 

```
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home form './src/view/Home';
import About form './src/view/About';


function Router(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/"> 
                    <Home/>
                </Route>
                
                <Route path="/about" component={About} />
            </Switch>
        </div>
    );
}

export default Router;
```
oya tapi sebelumnya kita harus panggil Router tersebut di dalam file App.js

```
<Router/>
```

dan kemudian selanjutnya jalankan file index.js pada root file project kita 
```
<BrowserRouter>
<App/>
</BrowserRouter>
```

oke sekarang kita mulai bedah kodenya satu persatu ya dimulai dari

```
<Route exact path="/"> 
    <Home/>
</Route>
<!-- Route disni berfungsi untuk membuat router pada project kita bisa dengan mengunakan penutup seperti di atas bisa juga tidak seperti dibawah ini-->
<Route path="/about" component={About} />
<!-- path disini berfungsi untuk membuat url seperti /home , /about dll -->
<!-- Switch disini berperan sebagai parent yang memiliki beberapa child seperti Route -->
<!-- kemudian BrowserRouter sama juga berperannya seperti Switch yaitu sebagai perent dari Switch -->
```

untuk dokumentasi resminya bisa langsung ke https://reactrouter.com/web/guides/quick-start

### notFound page
untuk membuat dan menerapkan page not found sangatlah sederhana kita hanya tinggal membuat sebuah file terlebih dahulu di dalam directory src/view/errors/notfound.js
setelah directory telah kita buat lalu kemudian tambahkan script dibawah ini kedalam file router kita 

```
<Route path="*" component={NotFound} />
<!-- pada path file dia atas kita beri router dengan simbol * yang bertujuan jika kita mencari router lain yang tidak ditemukan maka otomatis akan memanggil component notFound.js yang telah kita buat tadi sebelumnya  tapi jangan lupa import module nya terlebih dahulu dia atas -->

import NotFound from '../view/errors/notfound';
 
```
oya satu lagi kenapa kita selalu mengunakan exact pada setiap route yang kita miliki ? 
jawabanya agar route tersebut menampilkan hasil sesuai apa yang kita inginkan makanya itu kita harus selalu menambahkan exact di setiap route yang kita tulis 
### route wildcard
route wildcard atau biasanya jika disebut url yang memiliki sebuah parameter di dalamnya seperti https://detik.com/berita/1 angka 1 tersebut adalah sebuah parameter yang harus kita terapkan kedalam sebuah route
yang nantinya bertujuan untuk kita panggil dalam menampilkan sebuah data mengunakan sebuah parameter



buat route pada file router yang pada path nya menampung identifier yang nantinya akan kita tampung kedalam module UserShow
```
Route exact path="/users/:identifier">
    <UserShow />
</Route>

```

show
```
const [user, setUsers] = useState([]);
let {identifier} = useParams();

const getShowUser = async () => {
    try{
        let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`);
        setUsers(response.data);
    }catch(e) {
        console.log(e.message);
    }
}

useEffect(() => {
    getShowUser()
},[identifier])

```
### state management context

### recoil

### middleware
