import type { UserData } from "../interfaces";

type IProps = {
  userData: UserData[];
};

export const FormDataInputs = ({ userData }: IProps) => {
  const sortedData = [...userData].sort((a, b) => a.last.localeCompare(b.last));

  return (
    <>
      <h1>PhoneBook</h1>
      <table>
        <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>Phone #</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((user) => (
            <tr key={user.id}>
              <td>{user.first}</td>
              <td>{user.last}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
