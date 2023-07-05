import { Form, useActionData } from "react-router-dom";

const ContactPage = () => {
  const data = useActionData();

  console.log("actionData: ", data);

  return (
    <div className="p-8">
      {!data && (
        <Form method="post" action="/contact">
          <label htmlFor="fullname">Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            className="border-4 border-black p-2 rounded"
          />
          <button className="bg-blue-500 rounded px-4 py-2">Submit</button>
        </Form>
      )}
      {data && (
        <p className="text-green-500">
          Hello {data.fullname}, your contact ID is {data.id}
        </p>
      )}
    </div>
  );
};

export default ContactPage;
