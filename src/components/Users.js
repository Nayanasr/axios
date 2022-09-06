import React, { useEffect, useState } from 'react';

function Users() {
    let [data, setData] = useState([]);

    const url = "https://jsonplaceholder.typicode.com/posts"

    useEffect(() => {
        fetchFunction();
    }, []);

    const fetchFunction = () => {
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((fetchData) => {
            setData(fetchData);
        });
    };
    console.log(data);
  return (
    <div>
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
                {data.map((val) => {
                    return (
                        <tr>
                            <td>{val.id}</td>
                            <td>{val.title}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    </div>
  )
}

export default Users;

