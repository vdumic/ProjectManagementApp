ALTER TABLE project
ADD created_by UUID references "user"("id");