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

```
### notFound page

### route wildcard

### state management context

### recoil

### middleware