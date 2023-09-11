export default abstract class PrismaDTO {

  public toJSON() {
    return JSON.parse(JSON.stringify(Object.getOwnPropertyNames(this)));
  }
}