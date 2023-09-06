import React from 'react'
import { Box, FormHelperText, TextField, styled, Button } from '@mui/material';

const TodoForm = styled(Box)({
  borderRadius: "8px",
  border: "2px solid #efefef",
  padding: "20px 15px",
  marginBottom: "30px",
})

const TextFieldStyled = styled(TextField)({
  borderRadius: "8px",
  marginBottom: "5px",
})

interface AddTodoFormPropTypes {
  value: string,
  handleOnChange: Function,
  handleOnSubmit: Function
}

const AddTodoForm = ({ handleOnChange, handleOnSubmit, value }: AddTodoFormPropTypes) => {

  return (
    <div>
      <TodoForm
        component={'form'}
        onSubmit={(e) => handleOnSubmit(e)}
      >
        <TextFieldStyled
          fullWidth
          required
          placeholder='Add text here...'
          id="add-todo-required"
          onChange={(e) => handleOnChange(e)}
          value={value}
        />
        <FormHelperText>
          Add your todo task in the above field and click on add button.
        </FormHelperText>

        <Button type={"submit"} disabled={value.length === 0} variant="contained" color="primary">
          Add
        </Button>
      </TodoForm>
    </div>
  )
}

export default AddTodoForm;