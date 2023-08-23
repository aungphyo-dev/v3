import {Link} from "react-router-dom";
import useFiresotre from "../../Hooks/useFiresotre.js";

const DAbout = () => {
    const {getAllCollection} = useFiresotre()
    const data = getAllCollection('about')
    const {deleteDocument} = useFiresotre()
  return(
      <div className="relative h-screen shadow-md sm:rounded-lg pb-5">
          <table className="w-full overflow-auto text-sm text-left text-gray-400">
              <thead className="text-xs  uppercase  bg-gray-700 text-gray-400 sticky top-0">
              <tr>
                  <th scope="col" className="px-6 py-3">
                      About
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Action
                  </th>
              </tr>
              </thead>
              <tbody>
              {data?.map(about => <tr key={about.id} className="bg-gray-800">
                      <th scope="row" className="px-6 py-4 font-medium max-w-screen-sm truncate  whitespace-nowrap text-white">
                          {about?.about}
                      </th>
                      <td className="px-6 py-4">
                          <Link to={`/dash-board/about/edit/${about.id}`} className="font-medium  text-blue-500 hover:underline mr-2">Edit</Link>
                          <button onClick={async ()=>{
                              if (confirm("Do you wanna delete this")){
                                  await deleteDocument('about',about.id)
                              }
                          }} className="font-medium  text-blue-500 hover:underline">Delete</button>
                      </td>
                  </tr>
              )}
              </tbody>
          </table>
      </div>
  )
}
export default DAbout