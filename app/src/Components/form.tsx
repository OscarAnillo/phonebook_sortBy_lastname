import { useState, type SetStateAction } from "react";
import type { UserData, UserInput } from "../interfaces";

type IProps = {
  userData: UserData[];
  setUserData: React.Dispatch<SetStateAction<UserData[]>>;
};

export const MainForm = ({ setUserData, userData }: IProps) => {
  const [userInput, setUserInput] = useState<UserInput>({
    first: "Oscar",
    last: "Anillo",
    phone: "1112223333",
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const { first, last, phone } = userInput;

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!first || !last || !phone) {
      return alert("Please provide the data!");
    }
    setUserData([
      ...userData,
      {
        id: userData.length + 1,
        first,
        last,
        phone,
      },
    ]);
    setUserInput({
      first: "",
      last: "",
      phone: "",
    });
  };

  return (
    <form onSubmit={onSubmitHandler} autoComplete="off">
      <label htmlFor="first">
        <input
          type="text"
          name="first"
          id="first"
          placeholder="First"
          value={first}
          onChange={onChangeHandler}
        />
      </label>
      <label htmlFor="last">
        <input
          type="text"
          name="last"
          id="last"
          placeholder="Last"
          value={last}
          onChange={onChangeHandler}
        />
      </label>
      <label htmlFor="phone">
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Phone #"
          value={phone}
          onChange={onChangeHandler}
        />
      </label>
      <input type="submit" value="Send" className="submit" />
    </form>
  );
};
