import expect from "expect.js";
import {decode, decodeToBytes, encode, encodeBytes} from "../base64-uri.js";
import {convertBasicToURISafe, convertURISafeToBasic} from "../base64-uri.js";
import Case from "./test-cases/cases.js";

describe("URI safe base64", () => {
  describe("encode(string)", () => {
    describe("should base64 encode string", () => {
      it("Case #1", () => {
        const [input, basic, output] = Case[1];
        expect(encode(input)).to.be(output);
      });

      it("Case #2", () => {
        const [input, basic, output] = Case[2];
        expect(encode(input)).to.be(output);
      });

      it("Case #3", () => {
        const [input, basic, output] = Case[3];
        expect(encode(input)).to.be(output);
      });
    });
  });

  describe("encodeBytes(Uint8Array)", () => {
    describe("should base64 encode bytes", () => {
      it("Case #1", () => {
        const [input, basic, output] = Case[1];
        expect(encodeBytes(new TextEncoder().encode(input))).to.be(output);
      });

      it("Case #2", () => {
        const [input, basic, output] = Case[2];
        expect(encodeBytes(new TextEncoder().encode(input))).to.be(output);
      });

      it("Case #3", () => {
        const [input, basic, output] = Case[3];
        expect(encodeBytes(new TextEncoder().encode(input))).to.be(output);
      });
    });
  });

  describe("decode(string)", () => {
    describe("should decode base64 string", () => {
      it("Case #1", () => {
        const [output, basic, input] = Case[1];
        expect(decode(input)).to.be(output);
      });

      it("Case #2", () => {
        const [output, basic, input] = Case[2];
        expect(decode(input)).to.be(output);
      });

      it("Case #3", () => {
        const [output, basic, input] = Case[3];
        expect(decode(input)).to.be(output);
      });
    });
  });

  describe("decodeToBytes(string)", () => {
    describe("should decode base64 string into Uint8Array", () => {
      it("Case #1", () => {
        const [output, basic, input] = Case[1];
        expect(new TextDecoder().decode(decodeToBytes(input))).to.be(output);
      });

      it("Case #2", () => {
        const [output, basic, input] = Case[2];
        expect(new TextDecoder().decode(decodeToBytes(input))).to.be(output);
      });

      it("Case #3", () => {
        const [output, basic, input] = Case[3];
        expect(new TextDecoder().decode(decodeToBytes(input))).to.be(output);
      });
    });
  });
});

describe("convertBasicToURISafe(string)", () => {
  describe("should convert basic base64 to URI safe base64", () => {
    it("Case #1", () => {
      const [unencoded, input, output] = Case[1];
      expect(convertBasicToURISafe(input)).to.be(output);
    });

    it("Case #2", () => {
      const [unencoded, input, output] = Case[2];
      expect(convertBasicToURISafe(input)).to.be(output);
    });

    it("Case #3", () => {
      const [unencoded, input, output] = Case[3];
      expect(convertBasicToURISafe(input)).to.be(output);
    });
  });
});

describe("convertURISafeToBasic(string)", () => {
  describe("should convert URI safe base64 to basic base64", () => {
    it("Case #1", () => {
      const [unencoded, output, input] = Case[1];
      expect(convertURISafeToBasic(input)).to.be(output);
    });

    it("Case #2", () => {
      const [unencoded, output, input] = Case[2];
      expect(convertURISafeToBasic(input)).to.be(output);
    });

    it("Case #3", () => {
      const [unencoded, output, input] = Case[3];
      expect(convertURISafeToBasic(input)).to.be(output);
    });
  });
});
