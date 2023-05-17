import expect from "expect.js";
import {decode, decodeToBytes, encode, encodeBytes} from "../base64-basic.js";
import Case from "./test-cases/cases.js";

describe("basic base64", () => {
  describe("encode(string)", () => {
    describe("should base64 encode string", () => {
      it("Case #1", () => {
        const [input, output] = Case[1];
        expect(encode(input)).to.be(output);
      });

      it("Case #2", () => {
        const [input, output] = Case[2];
        expect(encode(input)).to.be(output);
      });

      it("Case #3", () => {
        const [input, output] = Case[3];
        expect(encode(input)).to.be(output);
      });
    });
  });

  describe("encodeBytes(Uint8Array)", () => {
    describe("should base64 encode bytes", () => {
      it("Case #1", () => {
        const [input, output] = Case[1];
        expect(encodeBytes(new TextEncoder().encode(input))).to.be(output);
      });

      it("Case #2", () => {
        const [input, output] = Case[2];
        expect(encodeBytes(new TextEncoder().encode(input))).to.be(output);
      });

      it("Case #3", () => {
        const [input, output] = Case[3];
        expect(encodeBytes(new TextEncoder().encode(input))).to.be(output);
      });
    });
  });

  describe("decode(string)", () => {
    describe("should decode base64 string", () => {
      it("Case #1", () => {
        const [output, input] = Case[1];
        expect(decode(input)).to.be(output);
      });

      it("Case #2", () => {
        const [output, input] = Case[2];
        expect(decode(input)).to.be(output);
      });

      it("Case #3", () => {
        const [output, input] = Case[3];
        expect(decode(input)).to.be(output);
      });
    });
  });

  describe("decodeToBytes(string)", () => {
    describe("should decode base64 string into Uint8Array", () => {
      it("Case #1", () => {
        const [output, input] = Case[1];
        expect(new TextDecoder().decode(decodeToBytes(input))).to.be(output);
      });

      it("Case #2", () => {
        const [output, input] = Case[2];
        expect(new TextDecoder().decode(decodeToBytes(input))).to.be(output);
      });

      it("Case #3", () => {
        const [output, input] = Case[3];
        expect(new TextDecoder().decode(decodeToBytes(input))).to.be(output);
      });
    });
  });
});
