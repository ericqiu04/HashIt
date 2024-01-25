CREATE OR REPLACE FUNCTION is_email_exist(email VARCHAR)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
STABLE
AS $$
DECLARE
    val VARCHAR;
BEGIN
    SELECT u.email INTO val FROM users u
    WHERE u.email = LOWER($1);

    IF FOUND THEN
        RETURN TRUE;
    ELSE
        RETURN FALSE;
    END IF;
END;
$$;
