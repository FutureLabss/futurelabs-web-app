import React, {useState, useEffect}  from "react";
import { TextField, Button, Grid, Stack, CircularProgress, } from "@mui/material";
import BackspaceIcon from '@mui/icons-material/Backspace';
import PublishIcon from '@mui/icons-material/Publish';
import { Nav } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'
import { BlogManager } from "./services/blog"
import { useNavigate } from 'react-router-dom'
import { EditorState} from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToHTML } from 'draft-convert'
import './Article.css'

const blogManager = new BlogManager()

export default function Article() {
  const history = useNavigate()
  const { currentUser } = useAuth()
  const [loading, setLoading] = useState(false)
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const [convertedContent, setConvertedContent] = useState(null)
  const [values, setValues] = useState({});
  const [file, setFile] = useState("")

  let select;
  if(file){
    select = <p style={{color: "green"}}>File Selected</p>
  } else {
    select = <p style={{color: "red"}}>File Not Selected</p>
  }

  // var username;
  useEffect(()=>{
    if(!currentUser){
      history('/signin')
    }
  },[history, currentUser])

  const handleEditorChange = (state) => {
    const contentValue = {value: convertedContent}
    let content = contentValue.value
    setValues({...values, content})
    setEditorState(state);
    convertContentToHTML()
  }

  const convertContentToHTML = () => {
  let currentContentAsHTML = convertToHTML(editorState.getCurrentContent())
    setConvertedContent(currentContentAsHTML)
  }

  const handleFile = (event) => {
    setFile(event.target.files[0])
  }

  const handleChange = (e) => {
    
    const {name,value} = e.target
    setValues({...values, [name]:value})
    // console.log(values)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoading(true)
    setValues({...values})
    await blogManager.addBlog(values, file).catch(error => {
      console.log(error);
    }).then(() => {
     history('/')
    })
  }

  return (
    <Grid sx={{marginTop: '7rem'}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} maxWidth={{}}>
      <Stack sx={{ maxWidth: '30%'}}>
        <Nav.Link href="/"><Button variant="contained"  startIcon={<BackspaceIcon />}></Button></Nav.Link>
      </Stack>
     
      <form onSubmit={handleSubmit}>
        <Grid sx={{display: 'flex', flexDirection: 'column', alignItems:'center'}} rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          <Grid item xs={10}>
            <Stack spacing={2} component="form" sx={{ width: 500, maxWidth: '100%',}} noValidate autoComplete="off">
              <TextField hiddenLabel placeholder="Title" variant="filled"  size="small" name="title" onChange={handleChange}  />
              <TextField hiddenLabel id="filled-hidden-label-small" placeholder="Description" name="description" onChange={handleChange} variant="filled" size="small" />
              <label htmlFor="contained-button-file">
                <label>Upload a photo
                  <input type="file" onChange={handleFile} required></input>
                </label>
                <Stack>{select}</Stack>
            </label>
            </Stack>
          </Grid>
          <Grid item sx={{ marginTop: '5rem'}} xs={10} rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
              <Stack sx={{ width: '90vw', maxWidth: '100%'}}>
                <Editor 
                  editorState={editorState}
                  onEditorStateChange={handleEditorChange}
                  wrapperClassName="wrapper-class"
                  editorClassName="editor-class"
                  toolbarClassName="toolbar-class"
                />
              </Stack>
              <Stack>
                {loading ? <div className="text-center"><CircularProgress size={30} /></div> : 
                <Button type="submit" variant="contained" startIcon={<PublishIcon />}>
                  PUBLISH
                </Button>}
              </Stack>
          </Grid>
        </Grid>
        </form>
      
      </Grid>
  );
}
