import teacherData from '../../../data/teachersData';
import adminsData from '../../../data/adminsData';

const CosmoFamilyDetails = () => {
    return (
        <div className="container mx-auto">

            <h1 className="text-3xl font-semibold text-center p-6 ">We are Cosmo Family</h1>
            <div role="tablist" className="tabs tabs-lifted shadow-lg p-2 rounded-lg bg-red-500 ">
                <input type="radio" name="my_tabs_2" role="tab" className="tab [--tab-bg:yellow] [--tab-border-color:red] font-semibold text-lg" aria-label="Management" />
                <div role="tabpanel" className="tab-content bg-base-100 border-red-600 rounded-box p-6">
                    <p className='text-center'>All Management Member</p>
                </div>
                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab [--tab-bg:yellow] [--tab-border-color:red] font-semibold text-lg"
                    aria-label="Teachers"
                    defaultChecked />

                <div role="tabpanel" className="tab-content bg-base-100  border-red-600  rounded-box p-6">
                    <div className="">
                        <h2 className="text-2xl text-center font-semibold">All Teachers (Cosmo School)</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {teacherData.map((teacher) => <div key={teacher?.id} className="card bg-base-100  shadow-xl">
                                <figure className="px-10 pt-10">
                                    {teacher?.photo ? <img
                                        src={teacher?.photo}
                                        alt="teacher"
                                        className="rounded-xl" width={200} height={200} /> : <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                                        alt="teacher"
                                        className="rounded-xl" width={200} height={200} />}
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{teacher?.name}</h2>
                                    <p><b>Designation</b>: {teacher?.designation}</p>

                                    {teacher?.assignedSubject ? <p><b>Assigned Subject</b>: {teacher?.assignedSubject}</p> : null}


                                    {teacher?.academicQualification ? <p><b> Academic Qualification: </b> {teacher?.academicQualification} </p> : null}

                                    {teacher?.specialized ? <p><b>Specialized: </b> {teacher?.specialized} </p> : null}

                                    <div className="card-actions">
                                    </div>
                                </div>
                            </div>)
                            }
                        </div>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab [--tab-bg:yellow] [--tab-border-color:red] font-semibold text-lg" aria-label="Admins" />

                <div role="tabpanel" className="tab-content bg-base-100  border-red-600 rounded-box p-6">
                    <h2 className="text-2xl text-center font-semibold">All Admin (Cosmo School)</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {adminsData.map((admin) => <div key={admin?.id} className="card bg-base-100  shadow-xl">
                            <figure className="px-10 pt-10">
                                {admin?.photo ? <img
                                    src={admin?.photo}
                                    alt="teacher"
                                    className="rounded-xl" width={200} height={200} /> : <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                                    alt="teacher"
                                    className="rounded-xl" width={200} height={200} />}
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{admin?.name}</h2>
                                <p><b>Designation</b>: {admin?.designation}</p>

                                {admin?.academicQualification ? <p><b> Academic Qualification: </b> {admin?.academicQualification} </p> : null}

                                {admin?.specialized ? <p><b>Specialized: </b> {admin?.specialized} </p> : null}

                                <div className="card-actions">
                                </div>
                            </div>
                        </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CosmoFamilyDetails;