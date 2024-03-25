-- add_board_trigger.sql

-- Function to insert into the panel table when a new board is inserted
CREATE OR REPLACE FUNCTION create_panel_for_board()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public."Panel" (title, "boardId")
    VALUES ('Backlog', NEW.id);
    RETURN NULL; -- Since you don't need to return anything for an INSERT trigger
END;
$$ LANGUAGE plpgsql;

-- Create trigger to execute the function after each insert on the board table
CREATE TRIGGER board_insert_trigger
AFTER INSERT ON public."Board"
FOR EACH ROW
EXECUTE FUNCTION create_panel_for_board();
