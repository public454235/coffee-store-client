import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, coffees, setCoffee }) => {

    const { _id, name, available, supplier, photo } = coffee
    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffee(remaining)
                        }
                    })
            }


        })

    }


    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img style={{ height: '' }} src={photo} alt="Movie" /></figure>
                <div className="flex justify-between w-full pr-4 items-center">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{supplier}</p>
                        <p>{available}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-4 p-2">
                            <button className="btn btn-active">View</button>
                            <Link to={`updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
                            <button
                                onClick={() => handleDelete(_id)}

                                className="btn">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;