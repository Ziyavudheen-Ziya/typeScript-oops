import express from 'express'


import { LibraryController } from '../controller/librarayController';
import { Member } from '../models/member';
import { Book } from '../models/book';


const router = express.Router()
const library = new LibraryController();


library.addBook(new Book ('The Great Gatsby', 'F. Scott Fitzgerland'));
library.addBook(new Book('1984','George Orwell'));

router.get('/',(req,res)=>{

      res.render('index',{
        
        librarian : library.introduceLibrarian(),
        books : library.showBooks(),
        members: library.showMembers()
          
      })
})

router.post('/add-book',(req,res)=>{

     const { title ,author} = req.body;
     const newBook =  new Book(title,author);
     library.addBook(newBook)
     res.redirect('/')
})

router.post('/add-member', (req, res) => {
    const { name, age } = req.body;
    const newMember = new Member(name, parseInt(age), `M${Date.now()}`);
    library.addMember(newMember);
    res.redirect('/');
  });

export default router;