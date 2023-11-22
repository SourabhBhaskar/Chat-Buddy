import { useTheme } from "../../Common/Theme";


function DataSection({ children }){
  const { primaryBg } = useTheme();
  return (
    <div className={`rounded-md p-4 ${primaryBg}`}>
      {children}
    </div>
  )
}


export default DataSection