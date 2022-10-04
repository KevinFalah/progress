import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Table, Dropdown, Button} from 'react-bootstrap';
import { faHourglassHalf, faCheckCircle, faXmarkCircle, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import {UserContext} from '../../context/UserContext'
import {useQuery} from 'react-query'
import {API} from '../../config/Api'

function Order() {

  const [state, dispatch] = useContext(UserContext)

  const [orderArray, setOrderArray] = useState([])

  const { data: order } = useQuery("orderCache", async () => {
    const response = await API.get("/hireds" );
    console.log("response : ", response.data.data);
    setOrderArray(response?.data?.data)
    return response.data.data;
  });

  console.log(state.user)
  console.log("ini array : ",orderArray)

  return (
    <>
        <div className="the-container">
        <Dropdown className='mt-2 mb-5'>
          <select className='bg-light p-2' style={{border:"none"}}>
            <option>My Order</option>
            <option>My Offer</option>
          </select>
      </Dropdown>
        <Table hover className="the-table">
            <thead>

                 <tr>
                    <th>No</th>
                    <th>Vendor</th>
                    <th>Order</th>
                    <th>Start Project</th>
                    <th>End Project</th>
                    <th>Status</th>
                    <th className='dflex text-center'>Action</th>
                </tr>
            </thead>
            <tbody>
              {orderArray?.map((data, index) => {
                return(
                  <>
                  
                  <tr>
                            <td>{index + 1}</td>
                            <td>{data?.user.fullName}</td>
                            <td>{data?.title}</td>    
                            <td>{data?.startproject}</td>    
                            <td>{data?.endproject}</td>  
                            <td >Success</td>    
                            <td className='dflex text-center'>
                              {/* <Button className='btn4 ms-2' size="sm">
                                Cancel
                              </Button> 
                              <Button className='btn3 ms-2' size="sm">
                                Approve
                              </Button>  */}
                              <Button className='btn5 ms-2' size="sm">
                                Send Project
                              </Button> 
                              <Button className='btn5 ms-2 ' size="sm">
                                View Project
                              </Button>
                              <FontAwesomeIcon icon={faHourglassHalf} style={{ marginLeft: '10px', color: 'gold' }} />
                              <FontAwesomeIcon icon={faCheckCircle} style={{ marginLeft: '10px', color: 'green' }} />
                              <FontAwesomeIcon icon={faXmarkCircle} style={{ marginLeft: '10px', color: 'red' }} />
                            </td>    
                        </tr>

                  </>
                )
              })}

            </tbody>
        </Table>
    </div>
    </>
  )
}

export default Order