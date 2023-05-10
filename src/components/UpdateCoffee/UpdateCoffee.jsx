import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData()
    const { _id, name, available, supplier, taste, category, details, photo } = coffee

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target
        const name = form.name.value
        const available = form.available.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const updatedCoffee = { name, available, supplier, taste, category, details, photo }
        console.log(updatedCoffee)

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Update SuccessFully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-extrabold ">Update Coffee</h1>
            <form onSubmit={handleUpdateCoffee}>
                <div className="md:flex gap-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-[#1B1A1A] font-medium">Coffee Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text text-[#1B1A1A] font-medium">Available Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="available" defaultValue={available} placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-[#1B1A1A] font-medium">Supplier</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text text-[#1B1A1A] font-medium">Taste</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-[#1B1A1A] font-medium">Category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="category" defaultValue={category} placeholder="Enter coffee category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text text-[#1B1A1A] font-medium">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-8">
                    <div className="form-control md:w-full mb-8">
                        <label className="label">
                            <span className="label-text text-[#1B1A1A] font-medium">Photo</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <input type="submit" value="Update Coffee" className="btn btn-block" />
            </form>
        </div>
    );
};

export default UpdateCoffee;