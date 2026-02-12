import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  PopperPlacementType,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SearchInput from "../common/SearchInput";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { title } from "../constants";
import InputWithIcon from "../common/InputwithIcon";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Task from "./Task";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { userDetails } from "../../api/UserDetails/User";
import { useEffect, useRef, useState } from "react";
import { generateTask } from "../../api/Task/createTask";
import { getTask } from "../../api/Task/getTask";
import { useDispatch } from "react-redux";
import { fetchTasks } from "../../store/slices/getTaskSlice";

const Item = styled(Paper)(({ theme }) => ({
  background: "transparent",
  boxShadow: "none",
  border: "none",
  textAlign: "left",
  padding: 0,
}));
const Dashboard = () => {
  const email = useSelector((state: RootState) => state.user.email);
  const [createTask, setCreateTask] = useState(false);
  const [description, setDescription] = useState<string>("todo");
  const [status, setStatus] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const handleChange = (event:any) => {
    console.log('status in on change', status)
    setStatus(event.target.value);
  };
  const getTaskDetails=async()=>{
   const data= await getTask()
   console.log('data', data)}

useEffect(() => {
  dispatch(fetchTasks());
}, [dispatch]);
  const fetchUser = async () => {
    try {
      const data = await userDetails(email);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchUser();
    getTaskDetails();
  },[]);

  const handleTask = async(newPlacement: PopperPlacementType) => {
    console.log('status', status)
    setCreateTask(true);
try {
   
    await generateTask({ 
      description: description, 
      status: status 
    });

    
    handleClose();
  } catch (error) {
    console.error("Error saving task:", error);
  }
  };
  const handleClose = () => {
    setCreateTask(false);
  };
  const getDescription = (e:any) => {
    setDescription(e.target.value);
  };
  const STATUS_MAP = {
  "To Do": "todo",
  "In Progress": "inprogress",
  "Done": "done",
};

  return (
    <>
      <Box
        className="dashboard-boundary"
        sx={{
          height: 900,
          p: 2,
          m: 2,
          backgroundColor: "#f5f5f5",
          border: "1px solid #ccc",
          borderRadius: 2,
          padding: 2,
          position: "relative",
        }}
      >
        <Grid container spacing={2} sx={{ m: 5, p: 2 }}>
          <Grid size={8}>
            <Item>
              <SearchInput />
            </Item>
          </Grid>
          <Grid size={4}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AccountCircleIcon sx={{ height: 40, width: 40 }} />
              <span>{email}</span>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            position: "relative",
            minHeight: "70vh",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {title.map((title, index) => (
              <Grid key={index} size={{ xs: 4, sm: 4, md: 4 }}>
                <Item sx={{ fontWeight: "bold", fontSize: 25 }}>{title}</Item>
                <Task boundaryRef=".dashboard-boundary" status={STATUS_MAP[title as keyof typeof STATUS_MAP]}/>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" onClick={() => handleTask("bottom-end")}>
            Create Task
          </Button>
        </Box>
        {/* <Box
            sx={{
              position: "absolute",
              bottom: 20,
              left: "50%",
              transform: "translateX(-50%)",
              width: "96%",
            }}
          >
            <InputWithIcon /> */}
        {/* </Box> */}
      </Box>

      {createTask && (
        <Modal
          open={createTask}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={handleClose}>x</Button>
            </Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create Task
            </Typography>
            <Box sx={{ m: 2 }}>
              <TextField
                fullWidth
                label="Description"
                id="fullWidth"
                onChange={(e) => getDescription(e)}
              />
            </Box>
            <Box sx={{ m: 2 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  label="status"
                  onChange={handleChange}
                >
                  <MenuItem value="todo">To Do</MenuItem>
                  <MenuItem value="inprogress">In Progress</MenuItem>
                  <MenuItem value="done">Done</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                onClick={() => handleTask("bottom-end")}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Modal>
      )}
    </>
  );
};
export default Dashboard;
