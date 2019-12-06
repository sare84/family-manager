export class CreateTodoDto {
  description: String;
  created: Date;
  done: Boolean;
  public: Boolean;
  creator: String;
  assigned: String;
    /*
    @IsEnum(Precision)
  @ApiPropertyOptional({ enum: Precision })
  */
};