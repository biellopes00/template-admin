import useAppData from "@/data/hook/useAppData";
import Layout from "../components/template/Layout";

export default function Notifications() {
  const {changeTheme} = useAppData()
  return (
    <Layout title="Notifications" subtitle="Manage your notifications">
      <button onClick={changeTheme}>Change theme</button>
    </Layout>
  )
}
