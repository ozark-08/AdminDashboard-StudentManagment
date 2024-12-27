import supabase from "../config/SupabaseClient";
import { useSelector } from "react-redux";

const { status, studentData } = useSelector((state) => state);
const [formError, setFormError] = useState(null);

export const addData = async () => {
  const { data, error } = await supabase
    .from("Student")
    .insert([{ status, studentData }]);

  try {
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
